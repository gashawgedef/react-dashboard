
import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase
        .from('cabins')
        .select('*');
    if (error) {
        console.error(error)
        throw new Error("Cabins could not load")

    }

    return data
}

export async function deleteCabins(id){

    const {data,  error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
    if (error) {
        console.error(error)
        throw new Error(`Cabins could not found with ${id}}`)

    }

    return data
  
}

export async function createCabins(newCabin){

    const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin ])
    .select();

    if (error) {
        console.error(error)
        throw new Error(`Cabins could not be created }`)

    }
    return data
  

  
}