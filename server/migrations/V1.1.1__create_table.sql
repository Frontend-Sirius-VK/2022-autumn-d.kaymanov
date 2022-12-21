create table carspec
(
    id int generated always as identity primary key,
    altimg text not null,
    srcimg text not null,
    namecar text not null,
    spec text not null,
    price int not null,
    yearcar int not null,
    mileage int not null,
    nameowner text not null,
    numberowner text not null,
    descriptioncar text not null
);
