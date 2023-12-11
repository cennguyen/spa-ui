import { memberServices } from '../memberServicesRTK'
import { createSelector } from 'reselect'
import get from 'lodash/get'
import { CONTAINER } from '../../../constants/container'

const EMPTY_VALUE = {}

export const selectTemplateResult = memberServices.endpoints.getTemplate.select(
    'default',
)

export const selectTemplate = createSelector(
    selectTemplateResult,
    (templateResult) => templateResult?.data ?? EMPTY_VALUE,
)

export const selectTemplateByContainer = createSelector(
    selectTemplate,
    (_, container) => container,
    (templateSelector, container) =>
        get(templateSelector, ['template', container], {}),
)

export const selectBodyContainer = createSelector(
    selectTemplate,
    (_, mainContainer) => mainContainer,
    (templateSelector, container) =>
        get(templateSelector, ['template', CONTAINER.BODY, 'col', 1, container]),
)

export const selectLangSupport = createSelector(
    selectTemplate,
    (data) => data.globalAttribute?.langSupports || 'en_US',
)

export const selectValueFromDataNocache = createSelector(
    selectTemplate,
    (_, key) => key,
    (templateSelector, key) => get(templateSelector, ['dataNoCache', key]),
)

export const selectInitData = createSelector(
    selectTemplate,
    (result) => result?.initData ?? EMPTY_VALUE,
)

export const selectInitDataByContainer = createSelector(
    selectInitData,
    (_, container) => container,
    (templateSelector, container) => get(templateSelector, [container]),
)

export const selectInitDataByComponent = createSelector(
    selectInitData,
    (_, container) => container,
    (_, component) => component,
    (templateSelector, container, component) => {
        switch (container) {
            case CONTAINER.HEADER:
                return get(templateSelector, [container, component])
            case CONTAINER.BODY:
                return get(templateSelector, [CONTAINER.BODY, container, component])
            default:
                return null
        }
    },
)