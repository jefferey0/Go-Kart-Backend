import express from 'express';
import authRoute from './auth.route.ts';
import giveawayRoute from './giveaway.route.ts';
import orderRoute from './order.route.ts';
import participantRoute from './participant.route.ts';
import paymentRoute from './payment.route.ts';
import adminRoute from './admin.route.ts';
import winnerRoute from './winner.route.ts';


const router = express.Router()

router.use('/auth', authRoute)

router.use('/giveaway', giveawayRoute)

router.use('/orders', orderRoute)

router.use('/payments', paymentRoute)

router.use('/admin', adminRoute)

router.use('/participants', participantRoute)

router.use('/winners', winnerRoute)



const routes = router;
export default routes