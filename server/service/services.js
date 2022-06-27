import {database} from '../database/connection.js'

export const getAll = async (conditions = {}) =>{
    try{
        return await database.Services.findAll(conditions)
    }catch{
        return false
    }
}

// export const getApproved = async () =>{
//     try{
//         return await database.Profile.findAll({where:{approved: 1}}, {raw: true})
//     }catch{
//         return false
//     }
// }

export const getById = async (id) =>{
    try{
        return await database.Services.findByPk(id)
        // return await database.Profile.findByPk(id, {raw: true})
    }catch{
        return false
    }
}

// export const getByUserId = async (id) =>{
//     try{
//         return await database.Profile.findOne({where:{UserId: id}}, {raw: true})
//     }catch{
//         return false
//     }
// }

export const exists = async (fields = {}) => {
    try{
        const count = await database.Services.count({
            where: fields})
        return count != 0
    }catch(e){
        console.log(e)
        return false
    }
}

export const update = async (id, data)=>{
    try{
        await database.Services.update(data, { where: {id} })
        return true
    }catch{
        return false
    }
}

export const insert = async(data) => {
    try{
        const service = new database.Services(data)
        await service.save()
        return service.dataValues.id
    }catch(e){
        console.log(e)
        return false
    }
}

// export const insertDonation = async(data) => {
//     try{
//         const donation = new database.Donations(data)
//         await donation.save()
//         // return donation.dataValues.id  //ar tikrai?
//     }catch(e){
//         console.log(e)
//         return false
//     }
// }

export const remove = async (id) =>{
    try{
        const service = await getById(id)
        await service.destroy()
        return true
    }catch{
        return false
    }
}