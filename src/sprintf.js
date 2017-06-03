export default function sprintf(str, replace, ...args) {
    if (typeof replace === 'string' || !isNaN(replace)) {
        let i = 0

        args.unshift(replace)

        return str.replace(/%[dfsu]/g, match => args[i++])
    } else if (typeof replace === 'object') {
        return str
            .replace(
                /:([a-zA-z0-9$-]+)|{((?:(?!{|}).)+)}/g,
                (...match) => replace[match[1] || match[2]] || match[0]
            )
    }
}
