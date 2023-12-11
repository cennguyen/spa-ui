

const colors = {
    name: 'dark',
    white: '#fff',
    grey: '#999',
    darkGrey: '72777F',
    red: 'F33C4D',
    tiber: '0B1422',
    body: '0B1422',
    text: '#fff',
    textLight: '#fff',
    primary: '#f50',
    secondary: '0FA810',
    main: '#fff',
    lightGray: 'CCD3DA',
    coolGray: 'F7F8FA',
    darkGray: 'C4C4C4',
    black: '#000',
    warning: 'FBDB90',
    watermelon: 'FF4A70',
    leftMenu: {
        icon: '#FFFFFF80',
        textCount: '#FFFFFF80',
        text: 'FFFFFF',
        active: 'FF5500',
        activeBackground: '182F49',
        separator: '#FFFFFF33',
        live: '0FA810',
    },
    betSlip: {
        contentBackground: '182F49',
        text: '072443',
        active: 'FF5500',
        background: '061A2F',
        border: 'hsla(0, 0%, 100%, .15)',
        link: 'FFFFFF',
        inputBackground: 'FFFFFF',
        inputBorder: 'CCD3DA',
        inputFocus: '066EF6',
        icon: '72777F',
    },
    footer: {
        background: '081A30',
        textLink: '#FFFFFF80',
        textHeader: 'FFFFFF',
        textContent: '#FFFFFF80',
        highlight: 'FF5500',
    },
}

const breakpoints = {
    desktop: '1280px',
    tablet: '1024px',
    mobile: '768px',
}

const components = {
    layout: {
        bg: `${colors.pa}`,
        fonts: {
            color: `${colors.text}`,
        },
    },
    button: {
        primary: {
            bg: `${colors.primary}`,
            color: `${colors.textLight}`,
            hover: {
                bg: `hsl(20, 100%, 42.5%)`,
                borderColor: 'hsl(20, 100%, 42.5%)',
            },
            disabled: {
                bg: `${colors.darkGrey}`,
                borderColor: `${colors.darkGrey}`,
            },
        },
        secondary: {
            bg: `${colors.secondary}`,
            color: `${colors.textLight}`,
            hover: {
                bg: `hsl(120.39999999999998, 83.6%, 30.5%)`,
                borderColor: 'hsl(120.39999999999998, 83.6%, 30.5%)',
            },
        },
        outline: {
            bg: `none`,
            border: `1px solid ${colors.white}`,
            color: `${colors.textLight}`,
            hover: {
                bg: `hsla(0,0%,100%,.15)`,
            },
        },
        icon: {
            bg: `transparent`,
            border: `0 none`,
            color: `${colors.grey}`,
        },
        disabled: {
            bg: colors.darkGray,
            borderColor: colors.darkGray,
            color: 'rgba(255,255,255,0.6)',
        },
    },
    tooltip: {
        borderColor: `${colors.white}`,
        color: `${colors.tiber}`,
        button: {
            color: `${colors.primary}`,
            hover: {
                border: `${colors.primary}`,
                color: `${colors.primary}`,
            },
            cancel: {
                color: `${colors.medGray}`,
                hover: {
                    border: `${colors.medGray}`,
                    color: `${colors.medGray}`,
                },
            },
        },
    },
    navigation: {
        borderTop: `1px solid hsla(0,0%,100%,.2)`,
        color: `hsla(0,0%,100%,.8)`,
        dropdown: {
            color: `${colors.spanishGray}`,
        },
        rectangle: {
            bg: 'rgba(77, 77, 77, .2)',
        },
    },
    header: {
        topBar: {
            bg: `linear-gradient(90deg,${colors.tiber},042D56_1￼)`,
            color: `${colors.white}`,
        },
        bottomBar: {
            bg: `#081a30`,
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
        },
    },
    search: {
        icon: {
            color: `${colors.primary}`,
        },
        input: {
            bg: '182F49',
            color: '#fff',
            animation: 'cubic-bezier(0, 1, 0.85, 1)',
            placeholder: {
                color: `rgba(255, 255, 255, .5)`,
            },
            focus: {
                color: `${colors.tiber}`,
            },
        },
    },
    themeToggle: {
        bg: '182F49',
        hover: {
            dayBg: 'rgba(0, 0, 0, .15)',
            moonBg: 'rgba(255, 255, 255, .25)',
        },
    },
    locale: {
        options: {
            bg: `${colors.white}`,
            color: `${colors.tiber}`,
            hover: {
                bg: `#f1f1f1`,
            },
        },
    },
    oddsFormat: {
        color: `${colors.tiber}`,
        tooltip: {
            bg: `${colors.white}`,
            color: `${colors.tiber}`,
        },
        options: {
            bg: `${colors.white}`,
            color: `${colors.tiber}`,
            hover: {
                bg: `#f1f1f1`,
            },
        },
        selected: {
            bg: `#046df6`,
            color: `${colors.white}`,
        },
    },
    modal: {
        portal: {
            bg: `rgba(75,75,75,.5)`,
        },
        content: {
            bg: colors.white,
            color: colors.tiber,
            borderRadius: `3px`,
            boxShadow: `0 8px 45px rgba(0, 0, 0, .45)`,
        },
        icon: {
            close: colors.black,
        },
    },
    form: {
        normal: {
            border: colors.lightGray,
            bg: colors.coolGray,
            color: colors.lightGray,
            placeholderColor: 'A3A7AC',
            hover: {
                bg: '1E8FE1',
                boxShadow: '0 0 15px rgba(4,109,246, .25)',
            },
        },
    },
    messages: {
        warning: {
            bg: colors.warning,
            color: colors.main,
        },
    },
    badge: {
        bg: colors.watermelon,
        color: colors.textLight,
    },
}

const dark = {
    colors,
    breakpoints,
    components,
}

export default dark