export const UserProfile = {
    gameInfo: () => {
        return {
                   
        }
    },

    personalInfo: () => {
        return {
            firstName: "",
            middleName: "",
            lastName: "",
            birthDate: "",
            gender: "",
            martialStatus: "",
            bloodType: "",
            nationality: ""   
        }
    },

    addressDetails: () => {
        return {
            presentRegion: "",
            presentProvince: "",
            presentMunicipality: "",
            presentBarangay: "",
            presentStreetOrPurok: "",
            permanentRegion: "",
            permanentProvince: "",
            permanentMunicipality: "",
            permanentBarangay: "",
            permanentStreetOrPurok: ""
        }
        
    },

    workDetails: () => {
        return {
            sourceOfIncome: "",
            natureOfWork: "",
            validId: "",
            frontIdPath: "",
            selfiePath: ""
        }
    }
}