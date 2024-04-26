# Integração do Redus

Integração com o sistema [Redus](https://www.redus.org.br)

## Serviço

Descarregamento do arquivo de respostas do Redus

## Executando o serviço

Os containers estão organizados em arquivos de configuração do docker compose e devem ser executados em um ambiente linux com [docker](https://docs.docker.com/engine/) (>=24) e [docker compose](https://docs.docker.com/compose/) (>=2.18) instalados.

```bash
cp .env.example .env

docker compose up -d
```

## Testando o serviço via http

### Descarregamento do arquivo .cvs

Exemplo com o comando `curl`:

```bash
curl -v --insecure http://127.0.0.1:5010
```

Retornos possíveis:

1. Sucesso

```json
{
  "status": "sucesso",
  "message": "Arquivo descarregado com sucesso"
}
```

2. Erro

```json
{
  "status": "erro",
  "message": "Arquivo não foi descarregado"
}
```
