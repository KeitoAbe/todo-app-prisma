import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Keito Abe",
      email: "keito.abe@fuller.co.jp",
      gender: "male",
      age: "20",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1>ユーザー情報の変更</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">名前</label>
          <input
            id="name"
            {...register("name", {
              required: "入力が必須の項目です。",
            })}
          />
          {errors.name?.message && (
            <div className="error-message">{errors.name.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
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
          <label>性別</label>
          <label htmlFor="field-male">
            <input
              {...register("gender", {
                required: "入力が必須の項目です。",
              })}
              type="radio"
              value="male"
              id="field-male"
            />
            男性
          </label>
          <label htmlFor="field-female">
            <input
              {...register("gender")}
              type="radio"
              value="female"
              id="field-female"
            />
            女性
          </label>
          <label htmlFor="field-other">
            <input
              {...register("gender")}
              type="radio"
              value="other"
              id="field-other"
            />
            その他
          </label>
          {errors.gender?.message && (
            <div className="error-message">{errors.gender.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="age">年齢</label>
          <select
            {...register("age", {
              required: "入力が必須の項目です。",
            })}
          >
            <option value="10">10代</option>
            <option value="20">20代</option>
            <option value="30">30代</option>
            <option value="40">40代</option>
            <option value="50">50代</option>
            <option value="60">60代以上</option>
          </select>
          {errors.age?.message && (
            <div className="error-message">{errors.age.message}</div>
          )}
        </div>
        <button type="submit">変更</button>
      </form>
    </div>
  );
}

export default App;
