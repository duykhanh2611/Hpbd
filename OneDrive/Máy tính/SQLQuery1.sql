create table mst_customer (
    customer_code varchar(20) primary key,
    customer_name varchar(100)
);

create table mst_shop (
    shop_code varchar(20) primary key,
    shop_name varchar(100)
);

create table mst_goods (
    goods_code varchar(20) primary key,
    goods_name varchar(100)
);

create table trn_receipt_header (
    receipt_no varchar(20) primary key,
    buy_date date NOT NULL,
    customer_code varchar(20),
    shop_code varchar(20),
    total_amount decimal(15,2),
    foreign key (customer_code) references mst_customer(customer_code),
    foreign key (shop_code) references mst_shop(shop_code)
);

create table trn_receipt_detail (
    receipt_no varchar(20),
    goods_cd varchar(20),
    quantity int,
    price decimal(15,2),
    amount decimal(15,2),
    primary key (receipt_no, goods_cd),
    foreign key (receipt_no) references trn_receipt_header(receipt_no),
    foreign key (goods_cd) references mst_goods(goods_code)
);

select buy_date, shop_name, customer_name, total_amount
from trn_receipt_header, mst_shop, mst_customer
where mst_shop.shop_code = trn_receipt_header.shop_code
  and mst_customer.customer_code = trn_receipt_header.customer_code;


select buy_date, shop_name, customer_name, total_amount
from trn_receipt_header
	left join mst_shop on trn_receipt_header.shop_code = mst_shop.shop_code
	left join mst_customer on trn_receipt_header.customer_code = mst_customer.customer_code


