import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from "@mantine/core";

import { FastAuthButton } from "@/shared/ui";

import styles from "./styles.module.scss";

type AuthType = "login" | "register";

export function AuthenticationForm(props: PaperProps) {
    const [type, toggle] = useToggle<AuthType>(["login", "register"]);

    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            password: "",
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length <= 6
                    ? "Password should include at least 6 characters"
                    : null,
        },
    });

    return (
        <Paper radius="md" p="xl" {...props}>
            <Text size="xl" fw={700}>
                Войти с помощью:
            </Text>

            <Group grow mb="md" mt="md">
                <FastAuthButton type="google" />
                <FastAuthButton type="twitter" />
            </Group>

            <Divider
                label="Или продолжите по электронной почте"
                labelPosition="center"
                my="lg"
            />

            <form onSubmit={form.onSubmit(() => {})}>
                <Stack>
                    {type === "register" && (
                        <TextInput
                            label="Имя"
                            placeholder="Ваше имя"
                            value={form.values.name}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "name",
                                    event.currentTarget.value
                                )
                            }
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Почта"
                        placeholder="hello@mantine.dev"
                        value={form.values.email}
                        onChange={(event) =>
                            form.setFieldValue(
                                "email",
                                event.currentTarget.value
                            )
                        }
                        error={
                            form.errors.email &&
                            "Проверьте адрес электронной почты"
                        }
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Пароль"
                        placeholder="Ваш пароль"
                        value={form.values.password}
                        onChange={(event) =>
                            form.setFieldValue(
                                "password",
                                event.currentTarget.value
                            )
                        }
                        error={
                            form.errors.password &&
                            "Пароль должен состоять минимум из 6 символов"
                        }
                        radius="md"
                    />

                    {type === "register" && (
                        <Checkbox
                            label="Обещаю вести себя хорошо"
                            checked={form.values.terms}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "terms",
                                    event.currentTarget.checked
                                )
                            }
                            color="#6dc9f7"
                        />
                    )}
                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor
                        component="button"
                        type="button"
                        c="dimmed"
                        onClick={() => toggle()}
                        size="xs"
                    >
                        {type === "register"
                            ? "Уже имеете аккаунт? Войти"
                            : "Не имеете аккаунта? Регистрация"}
                    </Anchor>
                    <Button
                        type="submit"
                        radius="xl"
                        className={styles.authButton}
                    >
                        {upperFirst(type === "login" ? "Войти" : "Регистрация")}
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}
