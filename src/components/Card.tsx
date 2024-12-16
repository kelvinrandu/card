
import { Box, Image, Badge, Icon } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";

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
    <Box boxShadow={'0px 4px 20px 0px #0000001A;'} maxW='sm' borderWidth='1px' borderRadius='10px' overflow='hidden'>
      <Image h={100} borderRadius='15px' padding={'10px'} width={'100%'} src={src ? src : 'https://bit.ly/2Z4KKcF'} alt={alt ? alt : 'Rear view of modern home with pool'} />

      <Box p='4'>
        <Box display='flex' alignItems='baseline'>
          <Badge
            fontSize={'14px'}
            fontFamily={'Plus Jakarta Sans'}
            fontWeight={500}
            lineHeight={'20px'}
            letterSpacing={'0.1px'}
            borderRadius='full' py={1} px={4} color='white' background='#27C2E1'>
            {badge ? badge : 'restaurants'}
          </Badge>

        </Box>

        <Box
          mt='1'
          fontWeight={500}
          as='h4'
          fontFamily={'Plus Jakarta Sans'}
          color={'#171717'}
          fontSize={'16px'}
          lineHeight='24px'
          letterSpacing={'-0.4px'}
          justifyContent={'flex-start'}
          display='flex' alignItems='baseline'

        >
          {name ? name : 'Chill Spot'}
        </Box>

        <Box>

          <Box fontFamily={'Plus Jakarta Sans'} display='flex' alignItems='baseline' as='span' fontSize='xs' color='gray.600' >
            {distance ? distance : '1 km away'}
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>

          {Array(5)
            .fill('')
            .map((_, i) => (

              <Icon fontSize="12px" color={i < rating! ? '#171717' : 'gray.300'}>
                <FaStar />
              </Icon>

            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {rating}  {reviewCount ? reviewCount : '(34)'}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}