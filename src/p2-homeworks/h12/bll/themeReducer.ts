enum THEME {
    CHANGE_THEME= 'CHANGE_THEME',
}

export type initStateThemeType = {
    theme: string
}

const initState: initStateThemeType = {
    theme: 'string',
};

type actionType = changeThemeType

export const themeReducer = (state = initState, action: actionType): initStateThemeType => {
    switch (action.type) {
        case THEME.CHANGE_THEME: {
            return {...state, theme: action.theme}
        }
        default: return state;
    }
};

type changeThemeType = ReturnType<typeof changeTheme>
type changeThemeReturnType = {
    type: THEME.CHANGE_THEME
    theme: string
}

export const changeTheme = (theme: string): changeThemeReturnType => {
    return {
        type: THEME.CHANGE_THEME as const,
        theme,
    }
};