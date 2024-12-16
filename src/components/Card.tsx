import { StarIcon } from '@chakra-ui/icons'
import { Box, Image, Badge,Icon } from '@chakra-ui/react'
import { FaBeer } from "react-icons/fa";

type Iprops = {
    name?: string;
    src?: string;
    badge?: string;
    alt?: string;
    distance?: string;
    rating?: number;
    reviewCount?: number;
};
export function Card(props: Iprops) {

    const { name, src, alt, badge, distance, rating, reviewCount } = props



    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image h={100} width={'100%'} src={src ? src : 'https://bit.ly/2Z4KKcF'} alt={alt ? alt : 'Rear view of modern home with pool'} />

            <Box p='4'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal.500'>
                        {badge ? badge : 'restaurants'}
                    </Badge>

                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'

                >
                    {name ? name : 'Chill Spot'}
                </Box>

                <Box>

                    <Box as='span' fontSize='xs' color='gray.600' >
                        {distance ? distance : '1 km away'}
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                  
                    {Array(5)
              .fill('')
              .map((_, i) => (
               
                <Icon fontSize="12px"   color={i < rating! ? 'teal.500' : 'gray.300'}>
                  <FaBeer />
              </Icon>
              
              ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {reviewCount ? reviewCount : 34} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}