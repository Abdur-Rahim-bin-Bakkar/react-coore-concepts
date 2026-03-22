function useStat(initial) {
    let value = initial;
    function setState(newValue) {
        value = newValue;
        return value;
    }
    return [value, setState]
}

const [data, setData] = useStat(10)
