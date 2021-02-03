-- Tabla users

insert into users (email, password,role_id,created_at) values ('admin@hotmail.com', '$2b$10$91Umf3AjCqjb5fPuGE1.Su5DgJgE8KtBqdfCSPrkQ060m3ARhjMQu',1,now());
insert into users (email, password,role_id,created_at) values ('francisco@gmail.com', '$2b$10$c0AVLRddaNbDHwd3DIA1lO9eIzKUHxYM2hSEwjI7rlH8.rcru5qsS',2,now());
insert into users (email, password,role_id,created_at) values ('rodrigosan06@gmail.com', '$2b$10$SX9/59B3nGTPqn0Gwa4Apeo4l97uOGQY3XFLNQKvvDx6VKSAzswdu',2,now());
insert into users (email, password,role_id,created_at) values ('rodrigo@hotmail.com', '$2b$10$y0PFqCKB3xKZ4nMHsG/wu.nA/6b7BSGtgBNoA7hlUuBLXwHFZu6kW',2,now());
insert into users (email, password,role_id,created_at) values ('anav@gmail.com', '$2b$10$tDYdKWkvnskPAKdwhrTZpucLk4mQQJUgfQrPCo1sv8M.ke/vKwb2u',2,now());
insert into users (email, password,role_id,created_at) values ('chicos@gmail.com', '$2b$10$91Umf3AjCqjb5fPuGE1.Su5DgJgE8KtBqdfCSPrkQ060m3ARhjMQu',2,now());

-- Tabla roles

insert into roles (type,created_at) values ('admin',now());
insert into roles (type,created_at) values ('user',now());
