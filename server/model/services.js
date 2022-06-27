import {DataTypes} from 'sequelize'
import {users} from './users.js'

export const service = (sequelize) => {
    const schema = {
        service_name: {type: DataTypes.STRING, allowNull: false}
    }

    const Service = sequelize.define('Service', schema)
    // const Users = users(sequelize)

    // Users.hasOne(Profile, {foreignKey: 'userId'})
    // Profile.belongsTo(Users)

    // Users.hasOne(Profile)
    // Profile.belongsTo(Users)

    return Service
}