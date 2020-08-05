import React from "react";
import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

const TeacherList = () => {
  return (
    <>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os Proffys disponíveis.">
          <form id="search-teachers">
            <Input name="subject" label="Máteria" />
            <Input name="week_day" label="Dia da semana" />
            <Input type="time" name="time" label="Horário" />
          </form>
        </PageHeader>

        <main>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </main>
      </div>
    </>
  );
};

export default TeacherList;
