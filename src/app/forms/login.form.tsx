import { Form, Input, Button } from "@heroui/react";
import { useState } from "react";

interface IProps {
    onClose: () => void;
}

 const LoginForm = ({ onClose }: IProps) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("set formdata: " + formData)
        onClose();
    };

    return (
        <Form onSubmit={handleSubmit} className="w-full">
            <Input
                aria-label="Email"
                isRequired
                name="email"
                placeholder="Введите email"
                type="email"
                value={formData.email}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none",
                }}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                validate={(value) => {
                    if (!value) return "Почта обязательна";
                    if (!validateEmail(value)) return "Некорретный email";
                    return null;
                }}
            />

            <Input
                isRequired
                name="password"
                placeholder="Подтвердите пароль"
                type="password"
                value={formData.password}
                classNames={{
                    inputWrapper: "bg-default-100", input: "text-sm focus: outline-none"
                }}
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                }
                validate={(value) => {
                    if (!value) return "Пароль для входа обязателен";
                    if (value !== formData.password) return "Неверный пароль";
                    return null;
                }}
            />
            <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
                <Button variant="light" onPress={onClose}>Отмена</Button>
                <Button type="submit" color="primary">Зарегистрироваться</Button>
            </div>
        </Form>
    )
}

export default LoginForm;