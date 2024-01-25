import { TextInput, TextInputProps, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import styles from "./styles.module.scss";

export function SearchInput(props: TextInputProps) {
    return (
        <TextInput
            radius="md"
            size="lg"
            placeholder="Поиск"
            rightSectionWidth={48}
            className={styles.input}
            rightSection={
                <IconSearch
                    style={{
                        width: rem(22),
                        height: rem(22),
                        cursor: "pointer",
                    }}
                    stroke={1.5}
                />
            }
            {...props}
        />
    );
}
