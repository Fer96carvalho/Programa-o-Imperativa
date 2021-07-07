-- Criando um novo esquema, agencia de viagem empresarial Fly Business

CREATE SCHEMA `fly_business`;

-- Criando as tabelas

CREATE TABLE `empresas`(
	`id_empresa` INT PRIMARY KEY AUTO_INCREMENT,
    `nome_empresa` VARCHAR(100),
    `nivel_socio_empresa`VARCHAR(20)
);

CREATE TABLE `pacotes`(
	`id_pacote` INT PRIMARY KEY AUTO_INCREMENT,
    `nome_pacote` VARCHAR(100),
    `descrição_pacote` TEXT,
    `nome_pais` VARCHAR(50),
    `numero_pessoas` INT,
    `preco_pacote` VARCHAR(20)
);

CREATE TABLE `viagens`(
	`id_viagem`INT PRIMARY KEY AUTO_INCREMENT,
	`id_pacote` INT,
    `id_empresa`INT,
    `data_ida` DATE,
    `data_volta` DATE,
    CONSTRAINT `fkpacote`
		FOREIGN KEY (`id_pacote`)
        REFERENCES `pacotes`(`id_pacote`),
	CONSTRAINT `fkempresa`
    FOREIGN KEY (`id_empresa`)
    REFERENCES `empresas`(`id_empresa`)
);
-- Inserindo dados na tabela

INSERT INTO `fly_business`.`empresas`(`nome_empresa`,`nivel_socio_empresa`)
VALUES ('Mary Perfumaria', 'Prata'),('Souza Arquitetura','Ouro'),('Carvalho Advocacia','Diamante'),
('Odebrech','Diamante'),('Club de Regatas do Flamengo','Diamante'),('PetShop Thor','Bronze');

-- Atualizando dados da tabela

UPDATE `fly_business`.`empresas` SET `nome_empresa`= 'Clube de Regatas do Flamengo'
WHERE `nome_empresa`= 'Club de Regatas do Flamengo';

-- Excluindo dados da tabela

DELETE FROM `fly_business`.`empresas` WHERE `nome_empresa`= 'Mary Perfumaria';

-- Selecione dados da tabela

SELECT `nome_empresa`,`nivel_socio_empresa` FROM `fly_business`.`empresas`
WHERE `nivel_socio_empresa`= 'Diamante'
ORDER BY `nome_empresa`;


