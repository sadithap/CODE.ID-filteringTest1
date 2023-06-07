create table agent(
	agent_code varchar(10),
	agent_name varchar(10),
	agent_office varchar(10),
	basic_commission varchar(20),
	constraint a_pk primary key (agent_code)
);

create table client(
	client_number varchar(10),
	client_name varchar(30),
	birth_date date,
	constraint c_pk primary key (client_number)	
);

create table policy(
	policy_number serial,
	policy_submit_date date,
	premium money,
	discount int,
	commission money,
	client_number varchar(10),
	agent_code varchar(10),
	policy_status varchar(20),
	policy_due_date date,
	constraint p_pk primary key (policy_number),
	constraint client_fk foreign key (client_number)
	references client(client_number),
	constraint agent_fk foreign key (agent_code)
	references agent(agent_code)
)

insert into client values
('CL001','WAYNE ROONEY','1956/5/11'),
('CL002','RYAN GIGGS','1972/9/3'),
('CL003','DAVID BECKHAM','1985/9/3'),
('CL004','MICHAEL OWEN','2012/9/3')

insert into agent(agent_code,agent_name,agent_office) values
('AG001','LIDYA','JAKARTA'),
('AG002','RUDI','BALI'),
('AG003','DICKY','BALI'),
('AG004','DAVID','SURABAYA'),
('AG005','FARIZ','SURABAYA')

insert into policy(policy_submit_date,premium,discount,commission,client_number,agent_code,policy_status) values
('2018/1/5',18600000,10,930000,'CL001','AG001','INFORCE'),
('2018/1/5',2500000,10,125000,'CL002','AG002','INFORCE'),
('2018/1/10',2500000,10,125000,'CL003','AG003','TERMINATE'),
('2018/1/25',4000000,10,200000,'CL003','AG002','PROPOSAL'),
('2018/1/25',2625000,10,131250,'CL004','AG002','PROPOSAL')

--test 5.a--

select p.* from policy p
join client c
on p.client_number=c.client_number
where p.policy_submit_date>'2018/1/15' and date_part('month', c.birth_date)=9

--test 5.b--

select p.* from policy p
join agent a
on p.agent_code=a.agent_code
where p.policy_status='INFORCE' and a.agent_office='JAKARTA'

--test 5.c--

update agent
set basic_commission=(p.commission/p.premium)*100::money
from policy p
where agent.agent_code=p.agent_code

--test 5.d--

update policy
set policy_due_date=date_trunc('month', date_trunc('day', policy_submit_date)+INTERVAL '30 day')+ INTERVAL '1 month - 1 day'

--test 5.e--

select *,(discount::numeric/100*premium::numeric)::money as nilai_discount from policy
where (premium::numeric-(discount::numeric/100*premium::numeric))<=1000000
order by nilai_discount asc