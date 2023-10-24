create database ToDoList;
create table ToDoTask(
TDtask_id serial Primary key,
TDtask_name varchar(120),
TDtask_description varchar(250),
TDtask_status integer,
TDtask_deadline date,
TDtask_completed boolean);
>>>>>>> frontend
create table users(user_id serial primary key,
Login varchar(90),
Password varchar(250),
Login varchar(90),
Telegramm_id integer,
Nickname varchar(250));
create table nd(ND_id serial,
TDtask_id int,
user_id int,
foreign key (TDtask_id) references ToDoTask(TDtask_id) on delete cascade,
foreign key (user_id) references users(user_id) on delete cascade);