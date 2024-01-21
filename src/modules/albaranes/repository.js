const fakeAlbaran = (id) => ({
    id,
    date: '2021-01-01',
})

const albaranDTO = (albaran) => albaran

export async function getAlbaranById(id){
    const albaran = albaranDTO(fakeAlbaran(id))

    return albaran
}