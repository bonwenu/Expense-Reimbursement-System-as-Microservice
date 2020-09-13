drop schema if exists ers_worker;
create schema ers_worker;

use ers_worker;
drop table if exists worker;

create table worker (
       worker_id integer not null auto_increment,
        city varchar(255),
        email varchar(255),
        first_name varchar(255),
        hire_date varchar(255),
        last_name varchar(255),
        pass_code varchar(255),
        phone varchar(255),
        reports_to integer not null,
        state varchar(255),
        street_address varchar(255),
        title varchar(255),
        username varchar(255),
        zip varchar(255),
        primary key (worker_id)
    ) engine=InnoDB;

alter table worker 
	add constraint UK_1pracyjlfmis4kre9cb740etf unique (username);
    
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('One', 'User', 'employee1', 'employee1', 'Data Coordiator', 10, '1/1/2019', '41 Randy Pass', 'Boston', 'Massachusetts', '02124', '611-772-4221', 'user1@admin.com');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('One', 'Manager', 'manager1', 'manager1', 'Manager', 0, '1/1/2016', '43255 Pennman', 'St Louis', 'Missouri', '77544', '617-772-4221', 'manager1@yahoo.com');


insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Ten', 'Gwen', 'benjamin722', 'benchee5252', 'Data Coordiator', 10, '1/1/2018', '42 Portland', 'Boston', 'Massachusetts', '22222', '612-772-4222', 'ben2@admin.ch');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Ten', 'Kevin', 'benjamin723', 'benchee5353', 'IT Tech', 10, '3/24/2017', '2314 Boulevard', 'Boston', 'Massachusetts', '33333', '613-772-4223', 'ben3@admin.ch');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Pope', 'Steven', 'benjamin724', 'benchee5454', 'IT Tech', 10, '5/2/2014', '66474 Randy Pass', 'Boston', 'Massachusetts', '12345', '614-772-4224', 'ben4@admin.ch');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Eleven', 'Johnny', 'benjamin725', 'benchee5555', 'IT Tech', 10, '4/24/2000', '44256 Hall Place', 'Ann Arbor', 'Michigan', '2213', '617-772-4221', 'ben5@admin.ch');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Ten', 'Kevin', 'benjamin726', 'benchee5656', 'IT Tech', 10, '1/24/2019', '46 Randy Pass', 'Lakolm', 'Virginia', '02124', '617-772-4221', 'ben6@admin.ch');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Dover', 'Ben', 'benjamin727', 'benchee5757', 'Accountant', 10, '1/13/2016', '41442 Lincoln Rd', 'Boston', 'Massachusetts', '11754', '617-772-4221', 'ben7@admin.ch');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Dover', 'Gwen', 'benjamin728', 'benchee5858', 'Accountant', 10, '1/24/2019', '256232 Randy Pass', 'Michigan City', 'Michigan', '5452`', '617-772-4221', 'ben8@admin.ch');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Tuff', 'Lucas', 'benjamin729', 'benchee5959', 'Accountant', 10, '1/13/2011', '32154 Yeti Ave', 'Ann Arbor', 'Michigan', '54786', '617-772-4221', 'ben9@admin.ch');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Hagger', 'Arny', 'ahagger0', 'ZIfvfpbYm', 'Developer',15 , '7/28/2019', '56248 Rowland Pass', 'Shawnee Mission', 'Kansas', '66220', '913-561-7825', 'ahagger0@digg.com');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('McKeand', 'Jennee', 'jmckeand1', 'OmN4mNbkk', 'Developer', 15, '5/6/2011', '95 Garrison Lane', 'Kansas City', 'Missouri', '64142', '816-995-5558', 'jmckeand1@ftc.gov');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Burmaster', 'Brigitte', 'bburmaster2', 'RjHt1s', 'DBA', 15, '10/14/2019', '020 Muir Way', 'Boynton Beach', 'Florida', '33436', '561-135-8161', 'bburmaster2@devhub.com');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Dahlen', 'Lucine', 'ldahlen3', 'BrOqDAxXW0B', 'DBA', 10, '7/22/2019', '7 Sheridan Circle', 'Riverside', 'California', '92513', '951-187-7136', 'ldahlen3@imageshack.us');
insert into worker (last_name, first_name, username, pass_code, title, reports_to, hire_date, street_address, city, state, zip, phone, email) values ('Doe', 'John', 'java', 'basics101', 'Manager', 0, '5/7/2019', '0 Hovde Way', 'Clearwater', 'Florida', '34629', '727-798-2321', 'ecockney4@time.com');

commit;