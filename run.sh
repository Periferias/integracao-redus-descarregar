#!/bin/bash

[ -f "$CSV_FILE_PATH" ] && rm -f "$CSV_FILE_PATH"

npx playwright test --reporter=list >&2

if [ $? -eq 0 ]; then
  _length=66
  _status="sucesso"
  _message="Arquivo descarregado com sucesso"
else
  _length=60
  _status="erro"
  _message="Arquivo não foi descarregado"
fi

echo "$_status: $_message" >&2

echo "HTTP/1.1 200 OK"
echo "Content-Type: application/json"
echo "Content-Length: $_length"
echo "Connection: close"
echo ""
echo "{\"status\":\"$_status\",\"message\":\"$_message\"}"
