import React from "react";

import { IconUser } from "@tabler/icons-react";
import { Flex, Group, Modal, Text, rem } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { AuthenticationForm } from "./AuthenticationForm";
import UserMenu from "./UserMenu";

import styles from "./styles.module.scss";

const Auth = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Flex align="center" gap={10}>
            <Group gap={5} className={styles.link} onClick={open}>
                <IconUser
                    style={{
                        width: rem(22),
                        height: rem(22),
                        cursor: "pointer",
                    }}
                    stroke={2}
                    color="#B1B1B1"
                />
                <Text size="lg" fw={500} c="#B1B1B1">
                    Войти
                </Text>
            </Group>
            <UserMenu />
            <Modal
                opened={opened}
                onClose={close}
                size="md"
                centered
                withCloseButton={false}
            >
                <AuthenticationForm />
            </Modal>
        </Flex>
    );
};

export default Auth;
