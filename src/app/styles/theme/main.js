
const colors = {
    name: 'default',
    white: '#fff',
    grey: '#999',
    darkGrey: '#72777F',
    red: '#F33C4D',
    tiber: '#0B1422',
    body: '#F1F3F7',
    text: '#0B1422',
    textLight: '#fff',
    primary: '#f50',
    athensGray: '#DADBDC',
    main: '#0B1422',
    secondary: '#0FA810',
    info: '#0A74EF',
    medGray: '#72777F',
    spanishGray: '#91949B',
    lightGray: '#CCD3DA',
    coolGray: '#F7F8FA',
    darkGray: '#C4C4C4',
    black: '#000',
    warning: '#FBDB90',
    watermelon: '#FF4A70',
    leftMenu: {
        icon: '#72777F',
        textCount: '#808080',
        text: '#072443',
        active: '#FF5500',
        activeBackground: '#FFFFFF',
        separator: '#DADBDC',
    },
    betSlip: {
        contentBackground: '#FFFFFF',
        text: '#072443',
        active: '#FF5500',
        background: '#CACED2',
        border: 'hsla(0, 0%, 40%, .2)',
        link: '#DADBDC',
        live: '#0FA810',
        inputBorder: '#CCD3DA',
        inputFocus: '#066EF6',
        icon: '#72777F',
    },
    oddPageHighlightSelectedColor: '#0A74EF',
    oddPageLiveSelectedColor: '#0FA810',
    footer: {
        background: '#F1F3F7',
        textLink: '#343B48',
        textHeader: '#343B48',
        textContent: '#334E6A',
        highlight: '#FF5500',
    },
    oddPage: {
        highlightSelected: '#0A74EF',
        liveSelected: '#0FA810',
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
        },
        secondary: {
            bg: `${colors.secondary}`,
            color: `${colors.textLight}`,
            hover: {
                bg: `hsl(120.39999999999998, 83.6%, 30.5%)`,
                borderColor: 'hsl(120.39999999999998, 83.6%, 30.5%)',
            },
        },
        info: {
            bg: colors.info,
            color: colors.textLight,
            hover: {
                bg: `hsl(212.20000000000005, 92%, 41.5%)`,
                borderColor: 'hsl(212.20000000000005, 92%, 41.5%)',
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
        selected: {
            color: colors.white,
        },
        dropdown: {
            color: `${colors.spanishGray}`,
        },
        rectangle: {
            bg: 'rgba(77, 77, 77, .2)',
        },
    },
    header: {
        topBar: {
            bg: `linear-gradient(90deg,${colors.tiber},042D56￼)`,
            color: `${colors.white}`,
        },
        bottomBar: {
            bg: `#fff`,
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
        },
    },
    search: {
        icon: {
            color: `${colors.primary}`,
        },
        input: {
            bg: 'E1E5E8',
            color: '545A64',
            animation: 'cubic-bezier(0, 1, 0.85, 1)',
            placeholder: {
                color: `#666b72`,
            },
            focus: {
                color: `${colors.tiber}`,
            },
        },
    },
    themeToggle: {
        bg: 'E1E5E8',
        hover: {
            dayBg: 'rgba(0, 0, 0, .15)',
            nightBg: 'rgba(255, 255, 255, .25)',
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
    accountMenu: {
        icon: colors.spanishGray,
    },
}

const main = {
    colors,
    breakpoints,
    components,
}

export default main