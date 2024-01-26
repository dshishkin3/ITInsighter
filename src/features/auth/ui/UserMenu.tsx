import {
    Menu,
    Group,
    Text,
    Avatar,
    useMantineTheme,
    ActionIcon,
    rem,
} from "@mantine/core";
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconChevronRight,
    IconDots,
} from "@tabler/icons-react";

function UserMenu() {
    const theme = useMantineTheme();

    return (
        <Group justify="center">
            <Menu
                withArrow
                width={300}
                position="bottom"
                transitionProps={{ transition: "pop" }}
                withinPortal
            >
                <Menu.Target>
                    <ActionIcon variant="default">
                        <IconDots
                            style={{ width: rem(16), height: rem(16) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item
                        rightSection={
                            <IconChevronRight
                                style={{ width: rem(16), height: rem(16) }}
                                stroke={1.5}
                            />
                        }
                    >
                        <Group>
                            <Avatar
                                radius="xl"
                                // eslint-disable-next-line max-len
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
                            />

                            <div>
                                <Text fw={500}>Nancy Eggshacker</Text>
                                <Text size="xs" c="dimmed">
                                    neggshaker@mantine.dev
                                </Text>
                            </div>
                        </Group>
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Item
                        leftSection={
                            <IconHeart
                                style={{ width: rem(16), height: rem(16) }}
                                stroke={1.5}
                                color={theme.colors.red[6]}
                            />
                        }
                    >
                        Liked posts
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconStar
                                style={{ width: rem(16), height: rem(16) }}
                                stroke={1.5}
                                color={theme.colors.yellow[6]}
                            />
                        }
                    >
                        Saved posts
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconMessage
                                style={{ width: rem(16), height: rem(16) }}
                                stroke={1.5}
                                color={theme.colors.blue[6]}
                            />
                        }
                    >
                        Your comments
                    </Menu.Item>

                    <Menu.Label>Settings</Menu.Label>
                    <Menu.Item
                        leftSection={
                            <IconSettings
                                style={{ width: rem(16), height: rem(16) }}
                                stroke={1.5}
                            />
                        }
                    >
                        Account settings
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconLogout
                                style={{ width: rem(16), height: rem(16) }}
                                stroke={1.5}
                            />
                        }
                    >
                        Logout
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Group>
    );
}

export default UserMenu;
