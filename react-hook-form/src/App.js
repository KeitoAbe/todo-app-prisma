import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register("email", {
              required: "入力が必須の項目です。",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "メールアドレスの形式が不正です。",
              },
            })}
          />
          {errors.email?.message && (
            <div className="error-message">{errors.email.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "入力が必須の項目です。",
              },
              minLength: {
                value: 8,
                message: "8文字以上入力してください。",
              },
            })}
            type="password"
          />
          {errors.password?.message && (
            <div className="error-message">{errors.password.message}</div>
          )}
        </div>
        <button type="submit" disabled={!isDirty || !isValid}>
          ログイン
        </button>
      </form>
    </div>
  );
}

export default App;
