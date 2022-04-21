<template>
    <div>
        <div class="mt-1 flex rounded-md shadow-sm">
            <span v-if="hasIcon" class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <i :class="iconAttr"></i>
            </span>
            <input 
            class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
            :class="customClass"
            :type="type"
            :name="name" 
            :id="id"
            :placeholder="placeholder"
            :data-validators="validators"
            :data-min_length="min_length"
            :data-max_length="max_length"
            v-model="value">
                       
            
        </div>
    </div>    
</template>

<script>
export default {
    props:{
        icon: {
            type: String,
            required: false,
            default:null
        },
        customClass:{
            type: String,
            required:false
        },
        type:{
            type: String,
            default: 'text'
        },
        name:{
            type: String,
            required: false
        },
        id:{
            type: String,
            required: false
        },
        placeholder:{
            type: String,
            required: false
        },
        validators:{
            type: String,
            required: false
        },
        min_length:{
            type: String,
            required: false
        },
        max_length:{
            type: String,
            required: false
        },
        modelValue:{
            type: String,
            required: false,
            default: ''
        }
    },
    emits:['update:modelValue'],
    computed:{
        value: {
            get(){
                return this.modelValue;
            },
            set(value){
                this.$emit('update:modelValue', value);
            }
        },
        hasIcon: function(){
            return (this.icon == null) ? false : true;
        },
        iconAttr: function(){
            return (this.icon == null) ? false : this.icon;
        }
    }
}
</script>