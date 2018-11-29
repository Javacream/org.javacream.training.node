create table CONFIG (entry varchar(256), value varchar(1024), primary key (entry));
insert into CONFIG (entry, value) values('welcome-message', "Hello from MySQL");
create table BOOKS (isbn varchar(10), title varchar(256), price Double, pages Integer, primary key (isbn));
