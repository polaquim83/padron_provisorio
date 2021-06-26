drop database if exists padron_provisorio;
create database padron_provisorio;
use padron_provisorio;
create table padron
(
    id                bigint auto_increment
        primary key,
    provincia         varchar(255) null,
    tipo_ejemplar     varchar(255) null,
    numero            int          null,
    apellido          varchar(255) null,
    nombre            varchar(255) null,
    clase             int          null,
    genero            varchar(2)   null,
    domicilio         varchar(255) null,
    seccion           varchar(255) null,
    circuito          varchar(255) null,
    localidad         varchar(255) null,
    codigo_postal     varchar(255) null,
    fecha_domicilio   varchar(255) null,
    tipo_nacionalidad varchar(255) null
);