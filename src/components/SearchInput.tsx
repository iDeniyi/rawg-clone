import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form
            style={{ width: "100%" }}
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}
        >
            <InputGroup>
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="search games..."
                    padding="10px"
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
