import React from "react";
import './index.css';
import Logo from "../Logo";

const Footer= () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__group">
                    <Logo/>

                    <div>© 2022 Все права защищены</div>
                </div>

                <ul className="footer__group">
                    <li><a href="">Каталог постов</a></li>
                    <li><a href="">Коллекция цитат</a></li>
                    <li><a href="">Дайджест новостей</a></li>
                    <li><a href="">Отзывы</a></li>
                </ul>

                <ul className="footer__group">
                    <li><a href="">Коллекция цитат</a></li>
                    <li><a href="">Часто спрашивают</a></li>
                    <li><a href="">Обратная связь</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
                <ul>
                    <h3>Мы на связи</h3>
                    <li><a href="tel:">+7 (967) 758-00-90</a></li>
                    <li><a href="mailto">rng.gns86@gmail.com</a></li>
                    <li>
                        <ul className="soc-links">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
export default Footer;