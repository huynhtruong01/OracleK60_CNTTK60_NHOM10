export const formatTimes = (time) => {
    const dated = new Date(time)
    const date = `0${dated.getDate() + 1}`.slice(-2)
    const month = `0${dated.getMonth() + 1}`.slice(-2)
    const year = dated.getFullYear()

    return `${date}/${month}/${year}`
}

const days = {
    1: 'hai',
    2: 'ba',
    3: 'tư',
    4: 'năm',
    5: 'sáu',
    6: 'bảy',
    0: 'chủ nhật',
}

export const formatFullTimes = (time) => {
    const dated = new Date(time)
    const day = dated.getDay()
    const date = `0${dated.getDate() + 1}`.slice(-2)
    const month = `0${dated.getMonth() + 1}`.slice(-2)
    const year = dated.getFullYear()

    return `Thứ ${days[day]}, ${date}/${month}/${year}`
}
