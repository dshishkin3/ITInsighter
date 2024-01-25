import { TextInput, TextInputProps, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import styles from "./styles.module.scss";

export function SearchInput(props: TextInputProps) {
    return (
        <TextInput
            radius="md"
            size="xl"
            placeholder="Search"
            rightSectionWidth={42}
            className={styles.input}
            rightSection={
                <IconSearch
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                />
            }
            styles={{ input: { width: "450px" } }}
            {...props}
        />
    );
}
