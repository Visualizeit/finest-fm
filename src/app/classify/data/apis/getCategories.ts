import { useRequest } from '@app/shared/data/apis'

interface GetCategoriesParams {}

/**
 * @see  https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=56#%E8%BF%90%E8%90%A5%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8
 * */

export const getCategories = (params: GetCategoriesParams = {}) => {
    const result = useRequest<Categories>(
        'https://api.ximalaya.com/operation/categories',
        params
    )

    return result
}

interface Categories {
    operation_categories: Categorie[]
}
