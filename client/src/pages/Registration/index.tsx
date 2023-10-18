function Registration() {
  return (
    <div>
      <div>
        <h1>To&Do</h1>
        <h3>начните с бесплатной учетной запис</h3>
        <form>
          <label>
            Ник:
            <input type="text" name="nickname" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Пароль:
            <input type="password" name="password" />
          </label>
          <label>
            Роль:
            <input type="text" name="role" />
          </label>
          <button type="submit">Зарегистрироваться</button>
        </form>
        <span>
          Нажимая кнопку «Зарегистрироваться», Вы принимаете условия
          Пользовательского соглашения.
        </span>
      </div>
      <span>Войти</span>
    </div>
  );
}

export default Registration;
