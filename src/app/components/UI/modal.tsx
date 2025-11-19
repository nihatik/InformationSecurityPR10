"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Link,
} from "@heroui/react";

export default function AuthModal({ isOpen, onOpenChange, mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};

    if (!email.trim()) e.email = "Введите email";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) e.email = "Некорректный email";

    if (!password.trim()) e.password = "Введите пароль";
    else if (password.length < 6)
      e.password = "Пароль должен быть минимум 6 символов";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = () => {
    if (!validate()) return;
    console.log(`${mode} =>`, email, password);
    onOpenChange(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-xl font-bold">
              {mode === "login" ? "Вход" : "Регистрация"}
            </ModalHeader>
            <ModalBody className="flex flex-col gap-4">
              <Input
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
                errorMessage={errors.email}
              />

              <Input
                type="password"
                label="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
                errorMessage={errors.password}
              />
            </ModalBody>
            <ModalFooter className="flex justify-between">
              <Button variant="light" onPress={onClose}>
                Отмена
              </Button>
              <Button color="primary" onPress={onSubmit}>
                {mode === "login" ? "Войти" : "Создать аккаунт"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
