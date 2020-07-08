import defaultconfig from '../../config/config.default'
import defaultgraphql from '../../config/graphql.default'
import devsequelize from '../../config/sequelize.dev'
type UnpackConfig<T> = T extends Function ? ReturnType<T> : T;
declare module 'kukumoon' {
	interface Config extends UnpackConfig<typeof defaultconfig>,UnpackConfig<typeof defaultgraphql>,UnpackConfig<typeof devsequelize> {}
}