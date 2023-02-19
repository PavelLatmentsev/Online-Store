import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addReview } from "../../../store/review";
import { getCurrentUserData } from "../../../store/users";
import Breadcrumps from "../../common/breadcrumps";
import AddComment from "../../common/comments/addComment";
import Footer from "../../common/footer";
import HeaderMenu from "../../common/headerMenu";
import styles from "./aboutPage.module.scss";

const AboutPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserData = useSelector(getCurrentUserData());
  const handleSubmit = (commentData) => {
    if (currentUserData) {
      dispatch(addReview({ ...commentData, image: currentUserData.image, name: currentUserData.name }));
    } else {
      history.push("/login");
    }
};
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.firstBlock}>

          <div className={styles.descript}>
          <div className={styles.BreadCrumps}>
                <Breadcrumps/>
                </div>
            <p>
              Наш магазин успешно работает и развивается с 2009 года, более 2000
              российских татуировщиков являются нашими постоянными клиентами. Мы
              делаем все, чтобы вам было доступно самое современное,
              качественное оборудование и приятный сервис. Постоянно увеличиваем
              ассортимент, всегда держим наши цены на низком уровне, максимально
              быстро отправляем ваши заказы. Доставка по России, Казахстану и
              Баруси заказов от 5000 рублей осуществляется БЕСПЛАТНО курьерской
              службой. На данный момент наш магазин тату оборудования крупнейший
              в Санкт-Петербурге и один из ведущих в России. Наш ассортимент не
              ограничивается только тату оборудованием, мы реализуем широкий
              спектр украшений и инструмента для пирсинга, оборудования и
              расходных материалов для татуажа и перманентного макияжа.
            </p>
          </div>
        </div>

        <div className={styles.secondBlock}>
          <div className={styles.descript + " " + styles.secondBlockTitle}>
            <p>
              Качественное тату-оборудование по доступной цене Наш
              интернет-магазин тату-оборудования предлагает широкий выбор
              качественной продукции для покупателей по всей стране.
              Предложенный спектр товаров необходим для каждого тату-мастера: и
              начинающего, и профессионала. Гарантируем, что инструменты будут
              по самой низкой цене и наивысшего качества. Каждый хороший
              татуировщик знает, как важно иметь под рукой надёжное
              оборудование, ведь именно оно помогает воплотить самые необычные
              заказы клиентов. Качественная работа оборудования обеспечивает
              точность и качество нанесения рисунка на тело. Важно иметь под
              рукой только лучшие материалы, которые сделают работу лёгкой и
              приятной. Созданный нами гипермаркет тату-оборудования позволит
              начинающим мастерам купить необходимое тату-оборудование и начать
              полноценную деятельность. Для профессиональных мастеров он будет
              просто незаменимым, ведь именно он поспособствует обновлению
              рабочего арсенала.
            </p>
          </div>
        </div>

        <div className={styles.thirdBlock}>
          <div className={styles.descript + " " + styles.thirdBlockTitle}>
            <p>
              На сегодняшний день наша компания является ведущей на рынке тату
              оборудования в России и странах СНГ. Мы не только предлагаем
              высококачественное оборудование и пигменты мировых производителей
              для татуировок и перманентного макияжа (татуажа), но и расходные
              материалы из США и Италии. А так же у нас имеется в продаже
              доступное оборудование фабричного производства Российских
              производителей и билдеров. В ShopTattoo существует гибкая система
              скидок для постоянных покупателей. Мы заинтересованы в каждом
              клиенте и рассмотрим любые варианты взаимовыгодного
              сотрудничества.
            </p>
          </div>
        </div>

        <div className={styles.fourBlock}>
          <div className={styles.descript + " " + styles.fourBlockTitle}>
            <p> ЧТО МЫ ПРЕДЛАГАЕМ?</p>
            <ul>
              <li>Тату-машинки;</li>
              <li>Педали для тату-машинок;</li>
              <li> Блоки питания для тату-машинок;</li>
              <li>Обезболивающие средства;</li>
              <li>Мази по уходу за татуировкой;</li>
              <li> Тату-иглы;</li>
              <li>Типсы (наконечники);</li>
              <li>Держатели;</li>
              <li>Клип-корды, шнуры RCA;</li>
              <li>Защитные средства (барьерная защита);</li>
              <li> Иглы для пирсинга;</li>
              <li>Зажимы и наборы для пирсинга; </li>
              <li> Дезинфицирующие составы;</li>
              <li>Аппараты для стерилизации и очистки инструмента;</li>
              <li>
                {" "}
                Также в интернет-магазине представлен большой выбор
                сопутствующих средств и материалов, которые необходимы для
                работы мастера.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.fiveBlock}>
          <div className={styles.fiveBlock_itemone}></div>
          <div className={styles.fiveBlock_itemthree}></div>
          <div className={styles.fiveBlock_itemtwo}></div>
        </div>

        <div className={styles.sixBlock}>
          <div className={styles.descript + " " + styles.sixBlockTitle}>
            <p>
              Широкий ассортимент тату оборудования и расходников позволяет нам
              обеспечивать надежным арсеналом инструментов не только мастеров,
              но и закрывать потребности целых студий, для которых, кстати, у
              нас есть специальное предложение, которое позволит приобрести
              оборудование для тату салона и расходники очень выгодно.
            </p>
          </div>
        </div>
        <div className={styles.sevenBlock} id="review">
          <div className={styles.descript + " " + styles.sevenBlockTitle}>
          <div className={styles.comments_title}>
             <AddComment onSubmit={handleSubmit} />
        </div >
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
