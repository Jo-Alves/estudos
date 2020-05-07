USE Master

-- Coloca o database em modo de emergência
ALTER DATABASE dbControleVenda SET EMERGENCY

-- Realiza um check do database
DBCC CHECKDB('dbControleVenda')

-- Altera o database para SINGLE_USER, ou seja, só um usuário pode estar conectado
ALTER DATABASE dbControleVenda SET SINGLE_USER WITH ROLLBACK IMMEDIATE

-- Realiza o comando para reparo do database
DBCC CHECKDB('dbControleVenda', REPAIR_ALLOW_DATA_LOSS) WITH NO_INFOMSGS, ALL_ERRORMSGS

-- Volta a base de dados para multiplos usuários
ALTER DATABASE dbControleVenda SET MULTI_USER

-- Restarta o status do database
EXEC sp_resetstatus 'dbControleVenda'