import { useState } from "react";
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa'

interface InputProps {
    value: string;
    placeholder: string;
    required?: boolean;
    label: string;
    type?: 'text' | 'password';
    disabled?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({value, onChange, placeholder, label, type, required, disabled}: InputProps): React.JSX.Element => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

  return (<div>
    <label className="text-[13px] text-slate-800">{label}</label>
    <div className={`flex items-center input-box ${disabled ? 'bg-slate-500' : 'bg-slate-100'}`}>
        <input 
        type={type === 'password' ? showPassword ? 'text' : 'password' : type}
        placeholder={placeholder}
        className={`w-full bg-transparent outline-none`}
        value={value}
        onChange={(e) => onChange(e)}
        required={required}
        />

        {type === 'password' && (
            <>
            {showPassword ? (
                <FaRegEye 
                    size={22}
                    className="text-slate-800 cursor-pointer"
                    onClick={() => toggleShowPassword()}
                />
            ) : (
                <FaRegEyeSlash 
                    size={22}
                    className="text-slate-400 cursor-pointer"
                    onClick={() => toggleShowPassword()}
                />
            )
        }
            </>
        )}
    </div>
  </div>);
};

export default Input;
