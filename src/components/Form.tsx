import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import rappilogoBN from "../assets/rappilogoBN.png";

type UserSubmitForm = {
    email: string;
    password: string;
  };

export const Form: React.FC = () => {
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters')
      });

      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
      });

    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
      };
    
    return (
        <div>
            <img src={rappilogoBN} alt="log" className="logo" />
            <form action="">
            <span>Welcome!</span>
                <div className="inputLabel">
                    <input type="text"
                    {...register('email')}
                     placeholder="Email"/>
                </div>
                <div className="inputLabel">
                    <input type="password"
                    {...register('password')}
                    placeholder="Password" />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Sing in
                    </button>
        </div>
                
            </form>
        </div>
    );
}