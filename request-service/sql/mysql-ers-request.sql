use ers_request;
drop table if exists request;

create table request (
       req_id integer not null auto_increment,
	   worker_id integer not null,
       amount double precision not null,
       description varchar(255),
	   status varchar(255),
       resolved_by varchar(255),
        primary key (req_id)
    ) engine=InnoDB;
    
insert into request (worker_id, amount, description, status, resolved_by) VALUES (2, 300, 'New printer for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 50, 'Office supplies', 'APPROVED', 'John Doe');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 20, 'Uber Transportation', 'DENIED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (6, 200, 'New printer for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (3, 100000, 'You know why -_-', 'APPROVED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 300, 'New carpet for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (14, 50, 'Bottled water for office', 'APPROVED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (7, 20, 'Uber Transportation', 'DENIED', 'John Doe');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 200, 'New printer for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (3, 333, 'New vacum', 'APPROVED', 'John Doe');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (2, 300, 'New printer for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 50, 'Office supplies', 'APPROVED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (8, 20, 'Uber Transportation', 'DENIED', 'John Doe');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (6, 200, 'New printer for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (12, 100000, 'You know why -_-', 'APPROVED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (2, 300, 'New printer for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 50, 'Office supplies', 'APPROVED', 'John Doe');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 20, 'Uber Transportation', 'DENIED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (8, 200, 'New printer for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 100000, 'You know why -_-', 'APPROVED', 'John Dow');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 7, 'Coffee for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 50, 'Office supplies', 'APPROVED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (3, 444, 'Lyft Transportation', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 200, 'New printer for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (3, 100000, 'You know why -_-', 'APPROVED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 100000, 'Just Becuase ', 'APPROVED', 'John Dow');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 7, 'Coffee for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 50, 'Office supplies', 'APPROVED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (9, 444, 'Lyft Transportation', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 200, 'New chair for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 100000, 'You know why -_-', 'APPROVED', 'Gwen Dover');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (4, 50, 'Office supplies', 'APPROVED', 'John Doe');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (6, 444, 'Lyft Transportation', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (13, 200, 'New chair for office', 'PENDING', '--');
insert into request (worker_id, amount, description, status, resolved_by) VALUES (11, 100000, 'You know why -_-', 'APPROVED', 'John Doe');

commit;


