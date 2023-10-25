create database ToDoList;

create table ToDoTask(
TDtask_id serial Primary key,
TDtask_name varchar(60),
TDtask_description varchar(250),
TDtask_status integer,
TDtask_deadline date,
create table users(user_id serial primary key,
Login varchar(90),
TDtask_completed boolean
);

create table users(
user_id serial primary key,
Login varchar(36),
Password varchar(250),
Nickname varchar(20)
);

create table tg_users(
user_id serial primary key,
Telegramm_id integer,
foreign key (user_id) references users(user_id) on delete cascade
);

create table nd(
ND_id serial,
TDtask_id int,
user_id int,
foreign key (TDtask_id) references ToDoTask(TDtask_id) on delete cascade,
foreign key (user_id) references users(user_id) on delete cascade
);