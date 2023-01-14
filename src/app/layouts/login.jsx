import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/common/footer";
import HeaderMenu from "../components/common/headerMenu";
import styles from "./login.module.scss";
import LoginForm from "../components/ui/loginForm";
import RegistrForm from "../components/ui/registrForm";
const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  console.log(formType);
  const tooggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.loginLayout}>
            {formType === "register" ? (
              <div>
                <h3 className="mb-4">Регистрация</h3>
                <RegistrForm />
                <p>
                  Уже есть аккаунт?{" "}
                  <a role="button" onClick={tooggleFormType}>
                    Авторизуйтесь
                  </a>{" "}
                </p>
              </div>
            ) : (
              <div>
                {" "}
                <h3 className={styles.loginLayout_signInTitle}>
                  Войдите в систему
                </h3>
                <LoginForm />
                <p className={styles.loginLayout_signInNotAccount}>
                  Нет аккаунта?{" "}
                  <a role="button" onClick={tooggleFormType}>
                    Зарегистрироваться
                  </a>{" "}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
      <footer>
            <Footer />
          </footer>
    </div>
  );
};

export default Login;
