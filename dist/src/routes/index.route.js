import express from 'express';
import authRoute from "./auth.route.js";
import giveawayRoute from "./giveaway.route.js";
import orderRoute from "./order.route.js";
import participantRoute from "./participant.route.js";
import paymentRoute from "./payment.route.js";
import adminRoute from "./admin.route.js";
import winnerRoute from "./winner.route.js";
const router = express.Router();
router.use('/auth', authRoute);
router.use('/giveaway', giveawayRoute);
router.use('/orders', orderRoute);
router.use('/payments', paymentRoute);
router.use('/admin', adminRoute);
router.use('/participants', participantRoute);
router.use('/winners', winnerRoute);
const routes = router;
export default routes;
//# sourceMappingURL=index.route.js.map