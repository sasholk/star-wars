import LinkAnimation from '@/components/ui/LinkAnimation'
import { rootVariants } from '@/constants/animationVariants.constants'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'

export const Route = createRootRoute({
  /**
   * Component that defines the root layout of the application.
   *
   * This component includes navigation links to the Home and Heroes pages,
   * using the `LinkAnimation` component for animated transitions.
   * The layout is responsive, with various padding applied based on screen size.
   *
   * The `AnimatePresence` and `motion.div` from `framer-motion` are used to
   * animate route transitions, with animation variants defined in `rootVariants`.
   * The `Outlet` component is used to render the current route's component.
   */
  component: () => (
    <>
      <div className='container my-4 flex gap-8 px-4 md:px-8 lg:px-12'>
        <Link
          to='/'
          className='[&.active]:font-bold'
        >
          <LinkAnimation name='Home' />
        </Link>
        <Link
          to='/heroes'
          className='[&.active]:font-bold'
        >
          <LinkAnimation name='Heroes' />
        </Link>
      </div>

      <div className='container px-4 md:px-8 lg:px-12'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={rootVariants}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
})
