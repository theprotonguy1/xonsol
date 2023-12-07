"use client"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { styles } from '../styles';
import { fadeIn,slideIn } from '../utils/motion';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Utility = (index) => {
  return (
    <section id="utility" className="mt-5 mb-15">
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="my-8"
      >
        <h2 className={styles.sectionHeadText}>Utilities</h2>
      </motion.div>

      <Box sx={{ width: "100%", padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <motion.div variants={slideIn("left","spring")}>
              <Item className="bg-yellow-200 text-lg font-bold">
                Discord Subscription Bot
              </Item>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
          <motion.div variants={slideIn("right","spring")}>
            <Item className="bg-slate-400 text-lg font-bold">Telegram Bot</Item>
          </motion.div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
          <motion.div variants={slideIn("left","spring")}>
            <Item className="bg-blue-200 text-lg font-bold">
              OnlyHub Platform
            </Item>
          </motion.div >
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
          <motion.div variants={slideIn("right","spring")}><Item className="bg-green-200 text-lg font-bold">Coming Soon</Item></motion.div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default SectionWrapper(Utility, 'utility');
