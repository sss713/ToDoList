create database ToDoList;

create table ToDoTask(
TDtask_id serial Primary key not null,
TDtask_name varchar(60) not null,
TDtask_description varchar(250),
TDtask_status integer not null,
TDtask_deadline date not null,
TDtask_completed boolean default 'false'
);

create table users(
user_id serial primary key,
Login varchar(36) not null,
Password varchar(250) not null,
Nickname varchar(20) not null
);

create table tg_users(
user_id serial primary key not null,
telegram_id integer not null,
enable_alerts boolean default 'true',
foreign key (user_id) references users(user_id) on delete cascade
);

create table nd(
ND_id serial not null,
TDtask_id int not null,
user_id int not null,
foreign key (TDtask_id) references ToDoTask(TDtask_id) on delete cascade,
foreign key (user_id) references users(user_id) on delete cascade
);